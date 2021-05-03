import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2154Component } from './test-component2154.component';

describe('TestComponent2154Component', () => {
  let component: TestComponent2154Component;
  let fixture: ComponentFixture<TestComponent2154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
