import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3765Component } from './test-component3765.component';

describe('TestComponent3765Component', () => {
  let component: TestComponent3765Component;
  let fixture: ComponentFixture<TestComponent3765Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3765Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
