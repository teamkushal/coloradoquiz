import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2098Component } from './test-component2098.component';

describe('TestComponent2098Component', () => {
  let component: TestComponent2098Component;
  let fixture: ComponentFixture<TestComponent2098Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2098Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
