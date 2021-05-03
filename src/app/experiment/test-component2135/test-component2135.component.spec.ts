import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2135Component } from './test-component2135.component';

describe('TestComponent2135Component', () => {
  let component: TestComponent2135Component;
  let fixture: ComponentFixture<TestComponent2135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
