import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent862Component } from './test-component862.component';

describe('TestComponent862Component', () => {
  let component: TestComponent862Component;
  let fixture: ComponentFixture<TestComponent862Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent862Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
