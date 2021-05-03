import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2872Component } from './test-component2872.component';

describe('TestComponent2872Component', () => {
  let component: TestComponent2872Component;
  let fixture: ComponentFixture<TestComponent2872Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2872Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
