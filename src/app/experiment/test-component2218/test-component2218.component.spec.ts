import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2218Component } from './test-component2218.component';

describe('TestComponent2218Component', () => {
  let component: TestComponent2218Component;
  let fixture: ComponentFixture<TestComponent2218Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2218Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
