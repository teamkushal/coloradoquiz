import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2316Component } from './test-component2316.component';

describe('TestComponent2316Component', () => {
  let component: TestComponent2316Component;
  let fixture: ComponentFixture<TestComponent2316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2316Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
