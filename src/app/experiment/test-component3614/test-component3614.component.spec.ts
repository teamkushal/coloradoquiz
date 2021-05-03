import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3614Component } from './test-component3614.component';

describe('TestComponent3614Component', () => {
  let component: TestComponent3614Component;
  let fixture: ComponentFixture<TestComponent3614Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3614Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
