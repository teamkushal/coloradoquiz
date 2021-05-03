import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2288Component } from './test-component2288.component';

describe('TestComponent2288Component', () => {
  let component: TestComponent2288Component;
  let fixture: ComponentFixture<TestComponent2288Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2288Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
