import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3029Component } from './test-component3029.component';

describe('TestComponent3029Component', () => {
  let component: TestComponent3029Component;
  let fixture: ComponentFixture<TestComponent3029Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3029Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
