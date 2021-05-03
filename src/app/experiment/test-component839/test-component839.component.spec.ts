import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent839Component } from './test-component839.component';

describe('TestComponent839Component', () => {
  let component: TestComponent839Component;
  let fixture: ComponentFixture<TestComponent839Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent839Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
