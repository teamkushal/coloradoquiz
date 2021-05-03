import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2346Component } from './test-component2346.component';

describe('TestComponent2346Component', () => {
  let component: TestComponent2346Component;
  let fixture: ComponentFixture<TestComponent2346Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2346Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
