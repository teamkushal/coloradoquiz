import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2297Component } from './test-component2297.component';

describe('TestComponent2297Component', () => {
  let component: TestComponent2297Component;
  let fixture: ComponentFixture<TestComponent2297Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2297Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
