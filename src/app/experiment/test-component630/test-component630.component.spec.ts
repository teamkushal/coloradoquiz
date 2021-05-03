import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent630Component } from './test-component630.component';

describe('TestComponent630Component', () => {
  let component: TestComponent630Component;
  let fixture: ComponentFixture<TestComponent630Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent630Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
