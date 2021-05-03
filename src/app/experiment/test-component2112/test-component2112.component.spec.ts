import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2112Component } from './test-component2112.component';

describe('TestComponent2112Component', () => {
  let component: TestComponent2112Component;
  let fixture: ComponentFixture<TestComponent2112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
