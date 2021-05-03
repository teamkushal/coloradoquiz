import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2539Component } from './test-component2539.component';

describe('TestComponent2539Component', () => {
  let component: TestComponent2539Component;
  let fixture: ComponentFixture<TestComponent2539Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2539Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2539Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
