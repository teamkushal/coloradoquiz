import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent592Component } from './test-component592.component';

describe('TestComponent592Component', () => {
  let component: TestComponent592Component;
  let fixture: ComponentFixture<TestComponent592Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent592Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
