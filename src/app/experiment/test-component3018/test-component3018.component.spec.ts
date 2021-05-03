import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3018Component } from './test-component3018.component';

describe('TestComponent3018Component', () => {
  let component: TestComponent3018Component;
  let fixture: ComponentFixture<TestComponent3018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
