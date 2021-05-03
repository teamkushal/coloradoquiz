import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2177Component } from './test-component2177.component';

describe('TestComponent2177Component', () => {
  let component: TestComponent2177Component;
  let fixture: ComponentFixture<TestComponent2177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
