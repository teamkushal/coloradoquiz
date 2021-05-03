import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent154Component } from './test-component154.component';

describe('TestComponent154Component', () => {
  let component: TestComponent154Component;
  let fixture: ComponentFixture<TestComponent154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
