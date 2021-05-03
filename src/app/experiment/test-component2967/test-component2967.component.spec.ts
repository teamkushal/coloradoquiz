import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2967Component } from './test-component2967.component';

describe('TestComponent2967Component', () => {
  let component: TestComponent2967Component;
  let fixture: ComponentFixture<TestComponent2967Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2967Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
