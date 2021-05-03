import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2862Component } from './test-component2862.component';

describe('TestComponent2862Component', () => {
  let component: TestComponent2862Component;
  let fixture: ComponentFixture<TestComponent2862Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2862Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
