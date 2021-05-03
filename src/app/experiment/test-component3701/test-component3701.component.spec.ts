import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3701Component } from './test-component3701.component';

describe('TestComponent3701Component', () => {
  let component: TestComponent3701Component;
  let fixture: ComponentFixture<TestComponent3701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3701Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
