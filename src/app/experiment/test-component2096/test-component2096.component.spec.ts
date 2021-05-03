import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2096Component } from './test-component2096.component';

describe('TestComponent2096Component', () => {
  let component: TestComponent2096Component;
  let fixture: ComponentFixture<TestComponent2096Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2096Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
