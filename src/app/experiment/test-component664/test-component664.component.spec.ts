import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent664Component } from './test-component664.component';

describe('TestComponent664Component', () => {
  let component: TestComponent664Component;
  let fixture: ComponentFixture<TestComponent664Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent664Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
