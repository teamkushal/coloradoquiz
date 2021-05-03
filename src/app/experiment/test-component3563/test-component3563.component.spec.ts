import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3563Component } from './test-component3563.component';

describe('TestComponent3563Component', () => {
  let component: TestComponent3563Component;
  let fixture: ComponentFixture<TestComponent3563Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3563Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
