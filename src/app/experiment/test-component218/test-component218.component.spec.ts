import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent218Component } from './test-component218.component';

describe('TestComponent218Component', () => {
  let component: TestComponent218Component;
  let fixture: ComponentFixture<TestComponent218Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent218Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
