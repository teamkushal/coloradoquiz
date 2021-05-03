import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2501Component } from './test-component2501.component';

describe('TestComponent2501Component', () => {
  let component: TestComponent2501Component;
  let fixture: ComponentFixture<TestComponent2501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2501Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
