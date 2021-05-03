import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent189Component } from './test-component189.component';

describe('TestComponent189Component', () => {
  let component: TestComponent189Component;
  let fixture: ComponentFixture<TestComponent189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
