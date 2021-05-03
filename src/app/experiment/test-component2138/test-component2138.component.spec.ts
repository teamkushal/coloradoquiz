import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2138Component } from './test-component2138.component';

describe('TestComponent2138Component', () => {
  let component: TestComponent2138Component;
  let fixture: ComponentFixture<TestComponent2138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
