import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2330Component } from './test-component2330.component';

describe('TestComponent2330Component', () => {
  let component: TestComponent2330Component;
  let fixture: ComponentFixture<TestComponent2330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
