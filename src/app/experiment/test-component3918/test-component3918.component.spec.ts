import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3918Component } from './test-component3918.component';

describe('TestComponent3918Component', () => {
  let component: TestComponent3918Component;
  let fixture: ComponentFixture<TestComponent3918Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3918Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
