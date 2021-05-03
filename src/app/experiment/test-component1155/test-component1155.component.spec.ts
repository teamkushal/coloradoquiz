import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1155Component } from './test-component1155.component';

describe('TestComponent1155Component', () => {
  let component: TestComponent1155Component;
  let fixture: ComponentFixture<TestComponent1155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
