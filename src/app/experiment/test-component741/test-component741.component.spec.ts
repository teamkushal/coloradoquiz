import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent741Component } from './test-component741.component';

describe('TestComponent741Component', () => {
  let component: TestComponent741Component;
  let fixture: ComponentFixture<TestComponent741Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent741Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
