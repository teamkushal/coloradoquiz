import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2372Component } from './test-component2372.component';

describe('TestComponent2372Component', () => {
  let component: TestComponent2372Component;
  let fixture: ComponentFixture<TestComponent2372Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2372Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
