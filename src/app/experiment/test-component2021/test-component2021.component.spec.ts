import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2021Component } from './test-component2021.component';

describe('TestComponent2021Component', () => {
  let component: TestComponent2021Component;
  let fixture: ComponentFixture<TestComponent2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
