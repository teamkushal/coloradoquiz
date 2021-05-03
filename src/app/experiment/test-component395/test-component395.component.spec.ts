import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent395Component } from './test-component395.component';

describe('TestComponent395Component', () => {
  let component: TestComponent395Component;
  let fixture: ComponentFixture<TestComponent395Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent395Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
