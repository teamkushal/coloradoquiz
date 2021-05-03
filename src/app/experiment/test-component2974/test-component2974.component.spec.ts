import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2974Component } from './test-component2974.component';

describe('TestComponent2974Component', () => {
  let component: TestComponent2974Component;
  let fixture: ComponentFixture<TestComponent2974Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2974Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
