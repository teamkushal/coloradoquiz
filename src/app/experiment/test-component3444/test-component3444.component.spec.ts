import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3444Component } from './test-component3444.component';

describe('TestComponent3444Component', () => {
  let component: TestComponent3444Component;
  let fixture: ComponentFixture<TestComponent3444Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3444Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
