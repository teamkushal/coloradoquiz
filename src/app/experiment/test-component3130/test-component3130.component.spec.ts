import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3130Component } from './test-component3130.component';

describe('TestComponent3130Component', () => {
  let component: TestComponent3130Component;
  let fixture: ComponentFixture<TestComponent3130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
