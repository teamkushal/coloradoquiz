import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2906Component } from './test-component2906.component';

describe('TestComponent2906Component', () => {
  let component: TestComponent2906Component;
  let fixture: ComponentFixture<TestComponent2906Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2906Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
