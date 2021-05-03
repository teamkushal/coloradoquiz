import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2491Component } from './test-component2491.component';

describe('TestComponent2491Component', () => {
  let component: TestComponent2491Component;
  let fixture: ComponentFixture<TestComponent2491Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2491Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
