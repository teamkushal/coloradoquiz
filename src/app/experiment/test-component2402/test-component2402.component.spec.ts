import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2402Component } from './test-component2402.component';

describe('TestComponent2402Component', () => {
  let component: TestComponent2402Component;
  let fixture: ComponentFixture<TestComponent2402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2402Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
