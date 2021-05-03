import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent820Component } from './test-component820.component';

describe('TestComponent820Component', () => {
  let component: TestComponent820Component;
  let fixture: ComponentFixture<TestComponent820Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent820Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
