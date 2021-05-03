import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2533Component } from './test-component2533.component';

describe('TestComponent2533Component', () => {
  let component: TestComponent2533Component;
  let fixture: ComponentFixture<TestComponent2533Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2533Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
