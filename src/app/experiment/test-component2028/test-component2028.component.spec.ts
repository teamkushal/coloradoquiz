import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2028Component } from './test-component2028.component';

describe('TestComponent2028Component', () => {
  let component: TestComponent2028Component;
  let fixture: ComponentFixture<TestComponent2028Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2028Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
