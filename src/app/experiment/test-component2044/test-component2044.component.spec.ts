import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2044Component } from './test-component2044.component';

describe('TestComponent2044Component', () => {
  let component: TestComponent2044Component;
  let fixture: ComponentFixture<TestComponent2044Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2044Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
