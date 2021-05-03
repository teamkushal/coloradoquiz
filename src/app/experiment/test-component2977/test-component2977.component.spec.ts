import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2977Component } from './test-component2977.component';

describe('TestComponent2977Component', () => {
  let component: TestComponent2977Component;
  let fixture: ComponentFixture<TestComponent2977Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2977Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
