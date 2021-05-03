import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent817Component } from './test-component817.component';

describe('TestComponent817Component', () => {
  let component: TestComponent817Component;
  let fixture: ComponentFixture<TestComponent817Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent817Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
