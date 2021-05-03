import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent37Component } from './test-component37.component';

describe('TestComponent37Component', () => {
  let component: TestComponent37Component;
  let fixture: ComponentFixture<TestComponent37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
