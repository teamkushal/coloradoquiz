import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3466Component } from './test-component3466.component';

describe('TestComponent3466Component', () => {
  let component: TestComponent3466Component;
  let fixture: ComponentFixture<TestComponent3466Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3466Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
