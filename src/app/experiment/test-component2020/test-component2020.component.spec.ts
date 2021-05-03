import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2020Component } from './test-component2020.component';

describe('TestComponent2020Component', () => {
  let component: TestComponent2020Component;
  let fixture: ComponentFixture<TestComponent2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
