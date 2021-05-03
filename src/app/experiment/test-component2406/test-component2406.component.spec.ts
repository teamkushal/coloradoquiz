import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2406Component } from './test-component2406.component';

describe('TestComponent2406Component', () => {
  let component: TestComponent2406Component;
  let fixture: ComponentFixture<TestComponent2406Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2406Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
